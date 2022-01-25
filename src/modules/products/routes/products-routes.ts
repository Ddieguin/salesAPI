import { Router } from 'express';
import { makeCreateProductController } from '../factories/create';
import { adaptRoutes } from '../../../shared/http/adapters/express-adapter';
import { makeIndexProductController } from '../factories';
import { makeShowProductController } from '../factories/show';
import { makeUpdateProductController } from '../factories/update';
import { makeDeleteProductController } from '../factories/delete';
import { uuidValidation } from './validations/uuid-validation';
import { bodyCreateProductValidation } from './validations/body-create-product-validation';
import { bodyUpdateProductValidation } from './validations/body-update-product-validation';

const productsRoutes = Router();

productsRoutes.get('/', adaptRoutes(makeIndexProductController()));
productsRoutes.get(
    '/:id',
    uuidValidation(),
    adaptRoutes(makeShowProductController()),
);
productsRoutes.post(
    '/',
    bodyCreateProductValidation(),
    adaptRoutes(makeCreateProductController()),
);
productsRoutes.patch(
    '/:id',
    uuidValidation(),
    bodyUpdateProductValidation(),
    adaptRoutes(makeUpdateProductController()),
);
productsRoutes.delete(
    '/:id',
    uuidValidation(),
    adaptRoutes(makeDeleteProductController()),
);

export { productsRoutes };
