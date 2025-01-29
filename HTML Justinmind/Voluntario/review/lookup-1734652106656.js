(function(window, undefined) {
  var dictionary = {
    "5d6177be-5094-4a8d-a77d-8fc21d0f21a0": "Recuperar contraseña",
    "9871cf16-8c39-4aa9-8388-ffa6fdf1f85f": "Historial actividades",
    "1d768963-065e-4b7e-9897-31055f00fb7a": "Catalogo fotos",
    "e4eba332-f0f5-4438-b3c5-71e3c3b75801": "Exito",
    "3488e698-2e1b-4887-afc0-15af07e6c29f": "Cerrar sesión",
    "d1e79c40-ba29-41cc-b2b0-0db8abb34dd0": "Inicio sesión",
    "921220d9-3edb-4052-945e-d5c32204c792": "Foto",
    "6aaa2a05-87c9-4bc3-8453-52a89c9c91e2": "Registro",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Lista actividades",
    "4833923f-5461-4a4a-9101-88eff8845d6c": "Actividad finalizada",
    "d3b5e21f-5d00-49b4-98c9-bc53ad3f9654": "Actividad",
    "5111f787-f829-4aff-8f5c-c7e336ceb2e9": "Registrado",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);