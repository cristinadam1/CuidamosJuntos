(function(window, undefined) {
  var dictionary = {
    "6ed18373-56b3-43ec-83ee-f102dd243ac7": "Actividades",
    "e3877648-948d-4856-b65d-e652bda01e6c": "Correo enviado",
    "19bbd1c3-b3ec-41eb-9d8d-0a19596989bf": "Registro",
    "622994dc-7614-4123-b9ca-438e6c9b5aa3": "Actividad",
    "bcb4b157-436d-4852-96c7-56c4b1bc99d2": "Foto1",
    "cbc24b00-c70b-43ca-a8ad-85d27da6b32a": "Fotos",
    "ef4642bf-8ae0-49da-93ee-73a775239a9a": "Recuperar contraseña",
    "8a36ccd3-9da4-464f-94e2-26a519a0408d": "Registro exitoso",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Inicio sesión",
    "7ef090c4-8c0d-4e56-a2c1-b21d461d44dc": "Actividades-Fotos",
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