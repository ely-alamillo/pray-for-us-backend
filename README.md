# Pray for Us backend

## Useful commands
`sequelize init`

    starts up the configuration for database

`sequelize db:migrate`

    used to check database can connect successfully

`sequelize model:create modelname --attributes 'title:string'`

    used to create a model for the database
    --attributes(are the columns) go in a string 'title:string iscomplete:false'

    must run db:migrate to instantitate the models