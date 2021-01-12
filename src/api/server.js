
import { Factory, Model, RestSerializer, Server } from "miragejs";
import { DESCRIPTIONS, TITLES } from "./const";
import { generateName, generateDate, generateRandomDescription } from "./utils";

const IdSerializer = RestSerializer.extend({
  serializeIds: 'always',
});

new Server({
  routes() {
    this.namespace = 'fakeApi';

    this.resource("documents");

    this.post('/search', function (schema, req) {
      const body = JSON.parse(req.requestBody);

      if (body.id) {
        return schema.documents.where(doc => doc.id === body.id);
      } else if (body.creationDate && body.name) {
        return schema.documents.where(doc => doc.creationDate === body.creationDate && doc.name.toLowerCase().includes(body.name.toLowerCase()));
      } else if (body.creationDate) {
        return schema.documents.where(doc => doc.creationDate === body.creationDate);
      } else if (body.name) {
        return schema.documents.where(doc => doc.name.toLowerCase().includes(body.name.toLowerCase()));
      }

      return schema.documents.none();
    });
  },
  models: {
    document: Model
  },
  factories: {
    document: Factory.extend({
      id(i) {
        return Number(i);
      },
      name() {
        return generateName(TITLES);
      },
      creationDate() {
        return generateDate();
      },
      description() {
        return generateRandomDescription(DESCRIPTIONS);
      }
    }),
  },
  serializers: {
    document: IdSerializer.extend({
      serialize(object, request) {
        // HACK Mirage keeps wanting to store integer IDs as strings. Always convert them to numbers for now.
        const numerifyId = (doc) => {
          doc.id = Number(doc.id);
        };
        
        let json = IdSerializer.prototype.serialize.apply(this, arguments);

        if (json.document) {
          numerifyId(json.document);
        } else if (json.documents) {
          json.documents.forEach(numerifyId);
        }

        return json;
      },
    }),
  },
  seeds(server) {
    server.createList('document', 10000);
  }
});