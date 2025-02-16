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

2. `libnotify` (Sistema de notificaciones) 
  - Proporciona el comando notify-send, que nos permite enviar notificaciones emergentes en el escritorio.
  - Sin libnotify, no podríamos mostrar mensajes visuales en i3.

3. `dunst` (Deamon de notificaciones) -> 
  - Es el servicio que realmente muestra las notificaciones en i3.
  - **dunst** recibe las notificaciones de notify-send y las muestra en pantalla.
  - Es muy personalizable (archivo  ~/.config/dunst/dunstrc).

## Script de gestión de la batería

Crearemos un script en `/usr/local/bin/battery_notify.sh` el cual se encargará de mostrar una notificación según el estado de la batería. 

``` bash

#!/bin/bash
	
export DISPLAY=:0
export DBUS_SESSION_BUS_ADDRESS=unix:path=/run/user/1000/bus

THRESHOLD=15
CRITICAL=5
INTERVAL=60	

while true; do
    BATTERY_LEVEL=$(acpi -b | grep -P -o '[0-9]+(?=%)')
    STATUS=$(acpi -b | grep -o 'Discharging')

    if [[ "$STATUS" == "Discharging" && "$BATTERY_LEVEL" -le "$THRESHOLD" ]]; then
        notify-send "⚠ Batería baja" "Queda $BATTERY_LEVEL% de batería." -u normal
    fi

    if [[ "$STATUS" == "Discharging" && "$BATTERY_LEVEL" -le "$CRITICAL" ]]; then
        notify-send "🔴 Batería crítica" "¡Conéctate a la corriente! Queda $BATTERY_LEVEL%." -u critical
    fi

    sleep $INTERVAL
done

```


### 3. Hacer el script ejecutable

Ahora, necesitas darle permisos de ejecución al script:

```bash
chmod +x ~/battery_notification.sh
```


### 4. Ejecutar el script en intervalos regulares

Para que el script revise periódicamente el nivel de la batería, puedes usar **cron** o un servicio como **systemd**. Aquí te muestro cómo configurarlo con `cron`.

#### Usando cron:

1. Abre el archivo crontab:

```bash
crontab -e
```

2. Agrega una línea al final para ejecutar el script cada 5 minutos:

```bash
*/5 * * * * /bin/bash /usr/local/bin/battery_notify.sh
```

Este comando ejecutará el script cada 5 minutos. 

## Dunst 

Sin el daemon de notificaciones activo nunca podremos ver la notificaciones por pantalla, debemos configurar `i3` para que ejecutre **dunst** en el arranque. En la configuración de i3 agregaremos. 

``` bash
exec --no-startup-id dunst &
```
### Configuración sencilla de Dunst

Puedes modificar cualquier ascpecto de como se muestran tus notificaciones, desde la posicion hasta los colores y tamaños. Te dejo una configuración bastante simple pero que resulta útil para empezar y poder probar este ejemplo. 

``` bash 

[global]
    monitor = 0
    follow = mouse
    geometry = "400x5-30+50"  # Ancho x Notificaciones en pantalla - X + Y
    origin = top-center
    offset = 0x5
    scale = 2  # Ajusta esto si quieres hacer todo aún más grande
    notification_height = 80
    padding = 20
    horizontal_padding = 20
    frame_width = 2
    frame_color = "#DEE5FF"
    separator_color = auto
    sort = yes
    idle_threshold = 120
    font = "Iosevka Nerd Font 18"  # Cambia por la que prefieras
    line_height = 5
    word_wrap = yes
    markup = full
    corner_radius = 12

[urgency_low]
    background = "#5C58FC"
    foreground = "#ECEFF4"
    timeout = 5

[urgency_normal]
    background = "#5C58FC"
    foreground = "#ECEFF4"
    timeout = 5

[urgency_critical]
    background = "#A92323"
    foreground = "#FBEAEA"
    frame_color = "#FBEAEA"
    timeout = 15  # No desaparece hasta que lo cierres

```
