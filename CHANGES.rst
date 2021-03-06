Changes
=======

3.6.0
-----

- Tile cache and webmap annotations are enabled by default.

3.5.0
-----

- Raster layer export to GeoTIFF, ERDAS IMAGINE and Panorama RMF formats.
- Customizable link preview for resources.
- Improved resource picker: inappropriate resources are disabled now.
- New implementation of WFS server which fixes many bugs.
- Support for ``geom_format`` and ``srs`` in feature layer REST API (POST / PUT requests).
- Session based OAuth authentication with token refresh support.
- Delete users and groups via REST API.
- Track timestamps of user's last activity.
- Customization of webmap's identify popup via control panel.
- Speedup cleanup of file storage maintenance and cleanup.
- Fix bulk feature deletion API when passing an empty list.
- Fix bug in CORS implementation for requests returning errors.
- Fix coordinates display format in webmap's identification pop-up.
- Fix tile distortion issue for raster styles

3.4.2
-----

- Fix WMS layer creation.

3.4.1
-----

- Fix layout scroll bug in vector layer fields editing.

3.4.0
-----

- New `tus-based <https://tus.io>`_ file uploader. Check for size limits before starting an upload.
- Server-side TMS-client. New resource types: TMS connection and TMS layer.
- Create, delete and reorder fields for existing vector layer.
- Improved `Sentry <https://sentry.io>`_ integration.
- WMS service layer ordering.
- Stay on the same page after login.
- Error messages improvements on trying to: render non-existing layer, access
  non-existing attachment or write a geometry to a layer with a different geometry
  type.
