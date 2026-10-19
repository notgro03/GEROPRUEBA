# Taller de videos con Codex

Proyecto de práctica para producir videos verticales reutilizables con **Codex + Remotion**. La primera composición es una promo demo de iGOLD: podés cambiar los textos, previsualizarla y renderizar un MP4.

## Abrir el proyecto en Windows

1. Instalá **GitHub Desktop** y **Node.js LTS** si todavía no los tenés.
2. En GitHub, abrí este repo y elegí **Code → Open with GitHub Desktop**. Seleccioná la rama `codex/igold-video-starter`.
3. En GitHub Desktop, elegí **Open in Visual Studio Code** (o abrí la carpeta desde Codex).
4. En la terminal de esa carpeta, ejecutá:

```powershell
npm install
npx skills add remotion-dev/skills
npm run dev
```

La primera instalación puede tardar unos minutos. `npm run dev` abre Remotion Studio en el navegador para previsualizar el video.

## Cambiar el contenido

Editá `src/content.ts`: gancho, vehículos, texto de apoyo y llamado a la acción. Guardá y volvé a la pestaña de Remotion Studio; la vista previa se actualiza.

Para probar con material real, copiá tus clips a `public/assets/` y poné el nombre del archivo en `sourceVideo` dentro de `src/content.ts`. La carpeta está excluida de Git para no publicar material comercial por accidente. La demo no incluye fotos ni videos de una máquina; agregá material propio antes de publicar.

## Exportar

Desde la terminal:

```powershell
npm run render:igold
```

El MP4 queda en `out/igold-demo.mp4`. Para compartirlo en redes, revisá primero el texto, el encuadre y el audio en Studio.

## Cómo trabajar con Codex sin repetir el contexto

Abrí siempre esta carpeta como proyecto. Codex lee `AGENTS.md` como las reglas permanentes; pedile cambios concretos, por ejemplo: “Cambiá el gancho por … y mantené la duración y el estilo”. Las decisiones estables quedan en el repo y los cambios se pueden comparar o revertir desde GitHub Desktop.

## Licencia de Remotion

Revisá la licencia oficial antes de usar Remotion en producción comercial: sus condiciones dependen del tamaño y tipo de organización. La composición y este código de práctica no incluyen música ni recursos de terceros.
