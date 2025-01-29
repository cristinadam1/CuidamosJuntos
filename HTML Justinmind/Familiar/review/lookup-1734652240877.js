(function(window, undefined) {
  var dictionary = {
    "21f8ed15-0ad9-4c02-abfb-0a22332b63f6": "Actividad",
    "2ff52eb6-4c66-44b3-b5ef-8e9c81ef27d3": "Cerrar sesión",
    "6a8ccb1b-fa9b-4dfd-bb79-42747061734b": "Selección familiar",
    "cc49ca4c-9924-45f2-a11b-bd3c83146fed": "Actividades familiar",
    "e003845f-6f7b-4023-bc41-d17f63395726": "Catálogo de fotos",
    "a4db9a23-4b60-473a-8000-b067bf9cefa3": "Exito",
    "34d4f276-7552-4974-b627-5ff317be4456": "Foto",
    "285d7c48-81c8-4b73-bc6e-132022fdbdfd": "Foto de catálogo",
    "80d49a7a-8df4-4bdb-8f2a-b4b47a9f8d4c": "Recuperar contraseña",
    "a78b9686-3445-4d5e-a6eb-50591ed9c1f4": "Registrado",
    "4aed8c9a-aedd-48a6-8900-7acc54e1dce2": "Actividades filtradas",
    "19c82a23-6b63-4470-8c5f-6bdaf8c574f3": "Registro",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Inicio",
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