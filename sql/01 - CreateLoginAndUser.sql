USE [master]
GO
--
-- Primero hay que creal la base de datos 'DAI-Pizzas'
--

IF NOT EXISTS (SELECT * FROM sys.server_principals WHERE [name] = N'Pizzas')
BEGIN
	PRINT 'Creando Login'
	CREATE LOGIN [Pizzas] WITH 
		PASSWORD=N'p1zz@s', 
		DEFAULT_DATABASE=[DAI-Pizzas], 
		CHECK_EXPIRATION=OFF, 
		CHECK_POLICY=OFF
END
GO

USE [DAI-Pizzas]
IF NOT EXISTS (SELECT * FROM sys.database_principals WHERE [name] = N'Pizzas')
BEGIN
	PRINT 'Creando User'
	CREATE USER [Pizzas] FOR LOGIN [Pizzas]
	ALTER ROLE [db_owner] ADD MEMBER [Pizzas]
END 
GO
