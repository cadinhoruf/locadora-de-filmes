import { Request, Response } from "express";
import { QueryResult } from "pg";
import { client } from "./database";
import format from "pg-format";

const create = async (req: Request, res: Response): Promise<Response> => {
  const queryFormat: string = format(
    "INSERT INTO movies (%I) VALUES (%L) RETURNING *",
    Object.keys(req.body),
    Object.values(req.body)
  );
  const queryResult: QueryResult = await client.query(queryFormat);

  return res.status(201).json(queryResult.rows[0]);
};

const readAll = async (req: Request, res: Response): Promise<Response> => {
  const queryResult: QueryResult = await client.query("SELECT * FROM movies;");
  return res.status(200).json(queryResult.rows);
};

const readById = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json(res.locals.foundMovie);
};

const readByCategory = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  const queryResult: QueryResult = await client.query(
    "SELECT * FROM movies WHERE category = $1",
    [req.query.category]
  );

  if (queryResult.rows.length === 0) {
    const allMovies: QueryResult = await client.query("SELECT * FROM movies");
    return res.status(200).json(allMovies.rows);
  }

  return res.status(200).json(queryResult.rows);
};

const partialUpdate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const queryFormat: string = format(
    "UPDATE movies SET(%I) = ROW(%L) WHERE id = %L RETURNING *;",
    Object.keys(req.body),
    Object.values(req.body),
    req.params.id
  );

  const queryResult: QueryResult = await client.query(queryFormat);

  return res.status(200).json(queryResult.rows[0]);
};

const remove = async (req: Request, res: Response): Promise<Response> => {
  const movieId: number = Number(req.params.id);

  const queryResult: QueryResult = await client.query(
    "DELETE FROM movies WHERE id = $1",
    [movieId]
  );

  return res.status(204).json();
};

export const read = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  if (req.query.category) {
    return readByCategory(req, res);
  }

  return readAll(req, res);
};

export default { readAll, create, readById, readByCategory, remove, read, partialUpdate };
