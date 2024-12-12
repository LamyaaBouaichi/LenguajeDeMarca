<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <html>
		<body>
		<h1>Productos</h1>
		<table border="1">
			<tr>
				<th>Nombre</th>
				<th>Precio sin IVA</th>
				<th>Descripción</th>
        <th>Cantidad</th>
        <th>IVA</th>
        <th>Precio con IVA</th>
			</tr>
			<xsl:for-each select="tienda/producto">
				<tr>
					<td><xsl:value-of select="nombre"/></td>
					<td><xsl:value-of select="precio"/> €</td>
					<td><xsl:value-of select="descripcion"/></td>
          <td><xsl:value-of select="stock"/></td>
          <td><xsl:value-of select="iva"/> %</td>
          <td><xsl:value-of select="precio*iva/10"/></td>
				</tr>
			</xsl:for-each>
		</table>
		
		</body>
		</html>
  </xsl:template>
</xsl:stylesheet>
