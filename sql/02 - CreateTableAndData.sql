USE [DAI-Pizzas]
GO
/****** Object:  Table [dbo].[Ingredientes]    Script Date: 5/28/2023 10:40:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ingredientes](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](150) NOT NULL,
 CONSTRAINT [PK_Ingredientes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[IngredientesXPizzas]    Script Date: 5/28/2023 10:40:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IngredientesXPizzas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdPizza] [int] NOT NULL,
	[IdIngrediente] [int] NOT NULL,
	[Cantidad] [int] NOT NULL,
	[IdUnidad] [int] NOT NULL,
 CONSTRAINT [PK_IngredientesXPizzas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Pizzas]    Script Date: 5/28/2023 10:40:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pizzas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](150) NOT NULL,
	[LibreGluten] [bit] NULL,
	[Importe] [float] NULL,
	[Descripcion] [varchar](max) NULL,
 CONSTRAINT [PK_Pizzas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Unidades]    Script Date: 5/28/2023 10:40:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Unidades](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](150) NOT NULL,
 CONSTRAINT [PK_Unidades] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Ingredientes] ON 
GO
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (1, N'Queso Muzzarella')
GO
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (2, N'Cebolla')
GO
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (3, N'Salsa Carbonara')
GO
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (4, N'Huevo')
GO
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (5, N'Queso Parmesano')
GO
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (6, N'Panceta')
GO
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (7, N'Salsa de Tomate')
GO
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (8, N'Albahaca')
GO
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (9, N'Anchoas')
GO
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (10, N'Oregano')
GO
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (11, N'Aceitunas')
GO
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (12, N'Alcaparras')
GO
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (13, N'Queso Gongonzola')
GO
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (14, N'Jamon Cocido')
GO
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (15, N'Jamon Crudo')
GO
INSERT [dbo].[Ingredientes] ([Id], [Nombre]) VALUES (16, N'Queso Provolone')
GO
SET IDENTITY_INSERT [dbo].[Ingredientes] OFF
GO
SET IDENTITY_INSERT [dbo].[IngredientesXPizzas] ON 
GO
INSERT [dbo].[IngredientesXPizzas] ([Id], [IdPizza], [IdIngrediente], [Cantidad], [IdUnidad]) VALUES (1, 1, 1, 1, 1)
GO
INSERT [dbo].[IngredientesXPizzas] ([Id], [IdPizza], [IdIngrediente], [Cantidad], [IdUnidad]) VALUES (2, 2, 1, 1, 1)
GO
INSERT [dbo].[IngredientesXPizzas] ([Id], [IdPizza], [IdIngrediente], [Cantidad], [IdUnidad]) VALUES (3, 2, 2, 100, 2)
GO
INSERT [dbo].[IngredientesXPizzas] ([Id], [IdPizza], [IdIngrediente], [Cantidad], [IdUnidad]) VALUES (4, 3, 3, 1, 1)
GO
INSERT [dbo].[IngredientesXPizzas] ([Id], [IdPizza], [IdIngrediente], [Cantidad], [IdUnidad]) VALUES (5, 3, 4, 1, 1)
GO
INSERT [dbo].[IngredientesXPizzas] ([Id], [IdPizza], [IdIngrediente], [Cantidad], [IdUnidad]) VALUES (6, 3, 5, 1, 1)
GO
INSERT [dbo].[IngredientesXPizzas] ([Id], [IdPizza], [IdIngrediente], [Cantidad], [IdUnidad]) VALUES (7, 3, 2, 100, 2)
GO
INSERT [dbo].[IngredientesXPizzas] ([Id], [IdPizza], [IdIngrediente], [Cantidad], [IdUnidad]) VALUES (8, 3, 6, 50, 2)
GO
SET IDENTITY_INSERT [dbo].[IngredientesXPizzas] OFF
GO
SET IDENTITY_INSERT [dbo].[Pizzas] ON 
GO
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (1, N'Pizza Muzzarella', 0, 800.5, N'Pizza con queso Muzzarella.')
GO
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (2, N'Pizza Fugazzeta', 1, 1000, N'Pizza con queso Muzzarella, tiene rica cebolla y te deja un aliento como para hacerle el alisado del pelo a tu pareja.')
GO
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (3, N'Pizza Carbonara', 1, 1540.5, N'Salsa carbonara: huevo, queso parmesano, sal y pimienta. Cebolla, bacon (kevin) y queso rallado por encima, ya que por debajo no se ve.')
GO
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (4, N'Pizza Margarita', 1, 1450, N'Salsa de tomate, mozzarella, albahaca, orégano y aceite de oliva. Viene con un mentoplus de regalo.')
GO
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (5, N'Pizza Napolitana', 0, 1270, N'Salsa de tomate, queso mozzarella, anchoas, orégano, alcaparras y aceite de oliva. Un corcho de obsequio para cuando vas al excusado.')
GO
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (6, N'Pizza Cuatro Quesos', 1, 1380, N'El queso fontina, originario del Valle de La garompiña; el queso gorgonzola, natural de Milán; el queso parmesano, originario de la ciudad de Parma; y el queso mozzarella del supermercado DIA.')
GO
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (7, N'Pizza con Jamon', 0, 1210, N'Pizza con queso Muzzarella, se le agrega Jamon y te cobro el doble.')
GO
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (8, N'Pizza con Rucula y Provolone', 1, 1380, N'Riquisima Pizza a la piedra, con queso provolone. Con el aliento de dragon que te queda aflojas un tornillo del puente Alsina.')
GO
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (9, N'Pizza Picante.', 1, 1400, N'Masa fina, queso del mercadito de la esquina, aji mejicano recontra picante. ATENCION: Cuando vas al baño se te incendia el papel higienico.')
GO
INSERT [dbo].[Pizzas] ([Id], [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (10, N'Faina', 0, 160, N'Harina, aceite, sal y pimienta... y despues te compras una faina en el COTO.')
GO
SET IDENTITY_INSERT [dbo].[Pizzas] OFF
GO
SET IDENTITY_INSERT [dbo].[Unidades] ON 
GO
INSERT [dbo].[Unidades] ([Id], [Nombre]) VALUES (1, N'Unidad')
GO
INSERT [dbo].[Unidades] ([Id], [Nombre]) VALUES (2, N'Gramos')
GO
INSERT [dbo].[Unidades] ([Id], [Nombre]) VALUES (3, N'Litros')
GO
SET IDENTITY_INSERT [dbo].[Unidades] OFF
GO
ALTER TABLE [dbo].[IngredientesXPizzas]  WITH CHECK ADD  CONSTRAINT [FK_IngredientesXPizzas_Ingredientes] FOREIGN KEY([IdIngrediente])
REFERENCES [dbo].[Ingredientes] ([Id])
GO
ALTER TABLE [dbo].[IngredientesXPizzas] CHECK CONSTRAINT [FK_IngredientesXPizzas_Ingredientes]
GO
ALTER TABLE [dbo].[IngredientesXPizzas]  WITH CHECK ADD  CONSTRAINT [FK_IngredientesXPizzas_Pizzas] FOREIGN KEY([IdPizza])
REFERENCES [dbo].[Pizzas] ([Id])
GO
ALTER TABLE [dbo].[IngredientesXPizzas] CHECK CONSTRAINT [FK_IngredientesXPizzas_Pizzas]
GO
ALTER TABLE [dbo].[IngredientesXPizzas]  WITH CHECK ADD  CONSTRAINT [FK_IngredientesXPizzas_Unidades] FOREIGN KEY([IdUnidad])
REFERENCES [dbo].[Unidades] ([Id])
GO
ALTER TABLE [dbo].[IngredientesXPizzas] CHECK CONSTRAINT [FK_IngredientesXPizzas_Unidades]
GO
