drop database if exists motismadex;
Create database motismadex;
use motismadex;
drop table if exists pokemons;
create table pokemons (
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR(100),
    url VARCHAR(100),
    sprite VARCHAR(250),
    type VARCHAR(500),
    abilities VARCHAR(3000)
    );
