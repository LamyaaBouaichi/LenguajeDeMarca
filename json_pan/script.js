const jsonUrl = 'json_pan.json';

fetch(jsonUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al cargar el archivo JSON');
    }
    console.log('JSON cargado con éxito');
    return response.json();
  })
  .then(data => {
    console.log('Datos obtenidos:', data); 
    displayData(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Función para mostrar los datos en la tabla
function displayData(data) {
  const tableBody = document.getElementById('data-table-body');

  data.forEach(item => {
    const row = document.createElement('tr');

    const nombreCell = document.createElement('td');
    nombreCell.textContent = item.nombre;
    row.appendChild(nombreCell);

    const integralCell = document.createElement('td');
    integralCell.textContent = item.integral;
    row.appendChild(integralCell);

    const origenCell = document.createElement('td');
    origenCell.textContent = item.origen;
    row.appendChild(origenCell);

    const stockCell = document.createElement('td');
    stockCell.textContent = item.stock;
    row.appendChild(stockCell);

    const precioCell = document.createElement('td');
    precioCell.textContent = item.precio;
    row.appendChild(precioCell);

    tableBody.appendChild(row);
  });
}
