# Notificaciones en Arch Linux con i3

## Introducción

Cuando instalamos un **tiling window manager** como i3, normalmente no tenemos notificaciones del sistema. 
Cogeré el ejemplo de la típica notificación de que nos estamos quedando sin batería, si bien es cierto que podemos tener una barra donde podemos ver el estado de nuestra batería, la mayoría del tiempo tan centrados en lo que estamos trabajando que podemos obviar ese ícono.

En este post te enseñaré como configurar notificaciones, con el ejemplo de la batería.

## Paquetes necesarios 

Debemos instalar tres paquetes para este ejemplo:

1. `acpi` (Advanced Configuration and Power Interface)
  - Es una herramienta en línea de comandos que permite ver información sobre la batería, temperatura, carga y otros datos de energía.
  - Usamos acpi -b para obtener el nivel de batería y saber si está cargando o descargándose.
  - En nuestro script de batería, acpi nos dice cuándo la batería está baja para que podamos mandar una alerta.

  > [!TIP]
  >
  > **acpi** nos da la información sobre la batería. Si detecta que la batería es baja, usamos **notify-send** para mostrar una alerta.

2. `libnotify` (Sistema de notificaciones) 

3. `dunst` (Deamon de notificaciones) -> 

