TO CREATE A NEW MIGRATION
run yarn sequelize migration:create --name=create=-nameofchoice
once migration is created inside of o  migrations folder, specify properties  
create a model inside of models
run command  yarn sequelize db:migrate


/////
in case of mistake run
yarn sequelize db:migrate:undo