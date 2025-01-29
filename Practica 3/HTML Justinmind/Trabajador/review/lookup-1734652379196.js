(function(window, undefined) {
  var dictionary = {
    "87f02638-fb8b-42f0-8a96-74ad35bbfdf6": "InicioSesion",
    "95a8dcaf-77a7-4fa3-9b12-3d74806647a2": "Registro",
    "9fd5d39b-14a0-43d2-a87e-e0cb0d6586d4": "Foto",
    "5c73a4fc-d0e0-4d0a-b12a-cc4b31dcca8a": "Registrado",
    "7aedd5ff-044d-489f-9229-000fd99f77cd": "Cerrar sesión",
    "bfe8ac31-af51-4468-94c4-5674c238b89f": "Recuperar Contraseña",
    "7b9c6793-3226-4818-bddf-53e13824761b": "Añadir actividad",
    "358378d8-34a3-43e8-9c27-ca53e5231a74": "Editar actividad",
    "c6aa4810-38aa-422e-8431-3f5b6d62294f": "Catálogo de fotos",
    "009027e2-89ba-4083-b073-ab8e66a8a799": "Actividad",
    "ac042286-3463-437c-94e5-be25c9fa8b05": "Actividades filtradas",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Lista Actividades",
    "887ae1ae-ccd7-4f3f-a584-edb68323020f": "Exito",
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