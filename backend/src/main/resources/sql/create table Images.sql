CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS Images (
    product_id uuid NOT NULL,
    id UUID DEFAULT uuid_generate_v4(),
    public_id VARCHAR(256) NOT NULL,
    image_url VARCHAR(512),
    image_index INTEGER CHECK(image_index >= 0 AND image_index <= 7),

    PRIMARY KEY (product_id, id),
    FOREIGN KEY (product_id) REFERENCES Products (id) ON DELETE CASCADE
);
