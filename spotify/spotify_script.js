CREATE DATABASE 'spotify'

use('spotify');

db.createCollection('album',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "titol",
    "anyPublicacio",
    "imatge"
  ],
  "properties": {
    "anyPublicacio": {
      "bsonType": "int"
    },
    "titol": {
      "bsonType": "string"
    },
    "id": {
      "bsonType": "int"
    },
    "imatge": {
      "bsonType": "string"
    }
  }
} }});

db.createCollection('artista',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "nom",
    "imatge"
  ],
  "properties": {
    "id": {
      "bsonType": "int"
    },
    "nom": {
      "bsonType": "string"
    },
    "imatge": {
      "bsonType": "string"
    }
  }
} }});

db.createCollection('estilomusica',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "tipo",
    "id artista"
  ],
  "properties": {
    "tipo": {
      "bsonType": "string"
    },
    "id": {
      "bsonType": "int"
    },
    "id artista": {
      "bsonType": "int"
    }
  }
} }});

db.getCollection('estilomusica').createIndex( { 'id artista':1 } , { name:'"id artista"'} );

db.createCollection('playlist',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "titulo",
    "eliminada"
  ],
  "properties": {
    "eliminada": {
      "bsonType": "int"
    },
    "titulo": {
      "bsonType": "string"
    },
    "id": {
      "bsonType": "int"
    }
  }
} }});

db.createCollection('publicacio',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id album",
    "id artista"
  ],
  "properties": {
    "id album": {
      "bsonType": "int"
    },
    "id artista": {
      "bsonType": "int"
    }
  }
} }});

db.getCollection('publicacio').createIndex( { 'id artista':1 } , { name:'"id artista"'} );

db.createCollection('usuari',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "email",
    "passwordU",
    "nomUsuari",
    "dataNaxement",
    "sexe",
    "pais",
    "codiPostal"
  ],
  "properties": {
    "codiPostal": {
      "bsonType": "int"
    },
    "nomUsuari": {
      "bsonType": "string"
    },
    "passwordU": {
      "bsonType": "string"
    },
    "dataNaxement": {
      "bsonType": "date"
    },
    "sexe": {
      "bsonType": "string"
    },
    "id": {
      "bsonType": "int"
    },
    "email": {
      "bsonType": "string"
    },
    "pais": {
      "bsonType": "string"
    }
  }
} }});

db.createCollection('activa',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "bsonType": "int"
    }
  }
} }});

db.createCollection('compartida',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "bsonType": "int"
    }
  }
} }});

db.createCollection('creaciopl',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "dataHora",
    "id usari",
    "id playlist"
  ],
  "properties": {
    "id playlist": {
      "bsonType": "int"
    },
    "id usari": {
      "bsonType": "int"
    },
    "id": {
      "bsonType": "int"
    },
    "dataHora": {
      "bsonType": "timestamp"
    }
  }
} }});

db.getCollection('creaciopl').createIndex( { 'id usari':1 } , { name:'"id usari"'} );

db.getCollection('creaciopl').createIndex( { 'id playlist':1 } , { name:'"id playlist"'} );

db.createCollection('eliminacio',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "dataHora",
    "id usari",
    "id creaciopl"
  ],
  "properties": {
    "id creaciopl": {
      "bsonType": "int"
    },
    "id usari": {
      "bsonType": "int"
    },
    "id": {
      "bsonType": "int"
    },
    "dataHora": {
      "bsonType": "date"
    }
  }
} }});

db.getCollection('eliminacio').createIndex( { 'id usari':1 } , { name:'"id usari"'} );

db.getCollection('eliminacio').createIndex( { 'id creaciopl':1 } , { name:'"id creaciopl"'} );

db.createCollection('esborrada',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "bsonType": "int"
    }
  }
} }});

db.createCollection('favorite',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "id usari"
  ],
  "properties": {
    "id usari": {
      "bsonType": "int"
    },
    "id": {
      "bsonType": "int"
    }
  }
} }});

db.getCollection('favorite').createIndex( { 'id usari':1 } , { name:'"id usari"'} );

db.createCollection('favoritealbum',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id favorite",
    "id album"
  ],
  "properties": {
    "id album": {
      "bsonType": "int"
    },
    "id favorite": {
      "bsonType": "int"
    }
  }
} }});

db.getCollection('favoritealbum').createIndex( { 'id album':1 } , { name:'"id album"'} );

db.createCollection('free',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "bsonType": "int"
    }
  }
} }});

db.createCollection('playlistcompartidausario',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id compartida",
    "id usari"
  ],
  "properties": {
    "id usari": {
      "bsonType": "int"
    },
    "id compartida": {
      "bsonType": "int"
    }
  }
} }});

db.getCollection('playlistcompartidausario').createIndex( { 'id compartida':1 } , { name:'"id compartida"'} );

db.createCollection('premium',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "bsonType": "int"
    }
  }
} }});

db.createCollection('recuperacio',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "dataHora",
    "id eliminacio",
    "id usari"
  ],
  "properties": {
    "id eliminacio": {
      "bsonType": "int"
    },
    "id usari": {
      "bsonType": "int"
    },
    "id": {
      "bsonType": "int"
    },
    "dataHora": {
      "bsonType": "timestamp"
    }
  }
} }});

db.getCollection('recuperacio').createIndex( { 'id usari':1 } , { name:'"id usari"'} );

db.getCollection('recuperacio').createIndex( { 'id eliminacio':1 } , { name:'"id eliminacio"'} );

db.createCollection('seguimiento',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id usari",
    "id artista"
  ],
  "properties": {
    "id usari": {
      "bsonType": "int"
    },
    "id artista": {
      "bsonType": "int"
    }
  }
} }});

db.getCollection('seguimiento').createIndex( { 'id artista':1 } , { name:'"id artista"'} );

db.createCollection('subscripcio',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "dataInici",
    "dataRenovacio",
    "id premium"
  ],
  "properties": {
    "id premium": {
      "bsonType": "int"
    },
    "dataRenovacio": {
      "bsonType": "date"
    },
    "id": {
      "bsonType": "int"
    },
    "dataInici": {
      "bsonType": "date"
    }
  }
} }});

db.getCollection('subscripcio').createIndex( { 'id premium':1 } , { name:'"id premium"'} );

db.createCollection('addicio',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "dataHora",
    "id usari",
    "id compartida"
  ],
  "properties": {
    "id usari": {
      "bsonType": "int"
    },
    "id": {
      "bsonType": "int"
    },
    "dataHora": {
      "bsonType": "timestamp"
    },
    "id compartida": {
      "bsonType": "int"
    }
  }
} }});

db.getCollection('addicio').createIndex( { 'id usari':1 } , { name:'"id usari"'} );

db.getCollection('addicio').createIndex( { 'id compartida':1 } , { name:'"id compartida"'} );

db.createCollection('cancio',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "titol",
    "durada",
    "reproduccions",
    "id album"
  ],
  "properties": {
    "id album": {
      "bsonType": "int"
    },
    "reproduccions": {
      "bsonType": "int"
    },
    "durada": {
      "bsonType": "int"
    },
    "titol": {
      "bsonType": "string"
    },
    "id": {
      "bsonType": "int"
    },
    "id addicio": {
      "bsonType": "int"
    }
  }
} }});

db.getCollection('cancio').createIndex( { 'id album':1 } , { name:'"id album"'} );

db.getCollection('cancio').createIndex( { 'id addicio':1 } , { name:'"id addicio"'} );

db.createCollection('favoritecancio',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id favorite",
    "id cancio"
  ],
  "properties": {
    "id cancio": {
      "bsonType": "int"
    },
    "id favorite": {
      "bsonType": "int"
    }
  }
} }});

db.getCollection('favoritecancio').createIndex( { 'id cancio':1 } , { name:'"id cancio"'} );

db.createCollection('pagament',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "datap",
    "total",
    "id subscripcio"
  ],
  "properties": {
    "total": {
      "bsonType": "double"
    },
    "id subscripcio": {
      "bsonType": "int"
    },
    "datap": {
      "bsonType": "date"
    },
    "id": {
      "bsonType": "int"
    }
  }
} }});

db.getCollection('pagament').createIndex( { 'id subscripcio':1 } , { name:'"id subscripcio"'} );

db.createCollection('paypal',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id paypal",
    "NomUsuari"
  ],
  "properties": {
    "id paypal": {
      "bsonType": "int"
    },
    "NomUsuari": {
      "bsonType": "string"
    }
  }
} }});

db.createCollection('targeta',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id targeta",
    "Numero",
    "caducitat",
    "codiSegeritat"
  ],
  "properties": {
    "Numero": {
      "bsonType": "int"
    },
    "caducitat": {
      "bsonType": "date"
    },
    "id targeta": {
      "bsonType": "int"
    },
    "codiSegeritat": {
      "bsonType": "int"
    }
  }
} }});
