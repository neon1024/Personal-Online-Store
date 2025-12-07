CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS Products (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(128) NOT NULL,
    category VARCHAR(64),
    description VARCHAR(2048),
    price NUMERIC(10, 2) CHECK (price >= 0),
    currency VARCHAR(8) CHECK (LOWER(currency) IN ('ron', 'eur')),
    quantity INTEGER CHECK (quantity >= 0),
    weight NUMERIC(10, 2) CHECK (weight >= 0),
    unit VARCHAR(8) CHECK (LOWER(unit) IN ('g', 'kg', 'ml', 'l'))
);
