# Camilo Echeverri Tamayo - Mateo Echeverri
# Test Plan - Taller 1
## Objetivo
El objetivo de este plan de pruebas es asegurar que la calculadora de crédito y amortización en la página web funcione correctamente con diversas entradas y produzca los resultados esperados. Los casos de prueba se automatizarán utilizando Selenium.

## Alcance
Los casos de prueba abordarán las siguientes funcionalidades:

Ingreso de datos válidos y cálculo correcto de la amortización.
Verificación de mensajes de error con datos inválidos.
Validación de campos obligatorios.
Verificación de la funcionalidad de reinicio de la calculadora.
Validación de la interfaz de usuario.

## Casos de prueba

### Caso de prueba 1: Cálculo correcto de amortización con datos válidos
**Descripción:** Verificar que la calculadora produce resultados correctos cuando se ingresan datos válidos.

**Pasos:**
1. Navegar a la página web.
2. Ingresar un monto de crédito válido (por ejemplo, 100,000).
3. Ingresar una tasa de interés válida (por ejemplo, 5%).
4. Ingresar un plazo válido (por ejemplo, 12 meses).
5. Hacer clic en el botón "Calcular".
6. Validar que el valor final del cálculo siempre será una deuda de 0.

**Resultado esperado:** La calculadora muestra un plan de amortización correcto con una deuda final de 0.

### Caso de prueba 2: Mensajes de error con datos inválidos
**Descripción:** Verificar que se muestran mensajes de error apropiados cuando se ingresan datos inválidos.

**Pasos:**
1. Navegar a la página web.
2. Ingresar una fecha inválida.
3. Ingresar un valor muy alto para el campo de intereses.
4. Ingresar un plazo inválido (por ejemplo, "1 año").
5. Seleccionar un valor para el campo de método de pago.
6. Presionar en el botón de calcular.
7. Validar que existe una alerta de error por los campos mal ingresados.
8. Validar que tras el error, los campos con valores inválidos son editables.

**Resultado esperado:** La calculadora muestra mensajes de error indicando que los datos ingresados son inválidos.

### Caso de prueba 3: Validación de campos obligatorios
**Descripción:** Verificar que todos los campos obligatorios deben completarse antes de realizar el cálculo.

**Pasos:**
1. Navegar a la página web.
2. Dejar uno o más campos obligatorios en blanco.
3. Hacer clic en el botón "Calcular".
4. Validar mensajes de error asociados a campos obligatorios faltantes.
5. Validar que se lanza error por falta de tasa de interés.
6. Validar que no se genera ningún cuadro de resultados con la ausencia de la tasa de interés.
7. Completar los datos con valores razonables.
8. Validar la aparición de la tabla de cálculos.

**Resultado esperado:** La calculadora muestra mensajes de error indicando que los campos obligatorios no pueden estar en blanco y permite la modificación para realizar nuevos cálculos con valores apropiados.

### Caso de prueba 4: Funcionalidad de reinicio de la calculadora
**Descripción:** Verificar que los campos modificables sólo admiten valores numéricos y es resiliente.

**Pasos:**
1. Navegar a la página web.
2. Ingresar datos inválidos en el campo de valor del crédito.
3. Validar que se genera un mensaje de error para solicitar un tipo de dato numérico.
4. Ingresar un alto monto en la tasa de interés.
5. Validar que se genera un error por la tasa de interés no razonable para los cálculos.
6. Ingresar todos los datos de forma correcta.
7. Validar que la tabla de cálculo se genera satisfactoriamente.
8. Validar que el número de meses concuerda con el valor de meses existentes en el plazo de pago en años seleccionados.

**Resultado esperado:** Los campos muestran mensajes de error tras entregar valores inesperados y luego de entregar los datos esperados, la tabla de cálculos se genera satisfactoriamente.
