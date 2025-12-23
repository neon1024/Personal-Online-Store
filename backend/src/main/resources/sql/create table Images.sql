CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS Images (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    product_id UUID NOT NULL,
    public_id VARCHAR(512) NOT NULL,
    url VARCHAR(512) NOT NULL,
    position INTEGER NOT NULL CHECK(position >= 0 AND position <= 7),

    FOREIGN KEY (product_id) REFERENCES Products (id) ON DELETE CASCADE
);
