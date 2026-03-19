import express, { type Request, type Response } from 'express';
import type { Cart, CreateCartRequest, GetCartResponse } from '../types/cards/index.ts';
import type { IdParams } from '../types/common/index.ts';


export const cardsRouters = express.Router();

cardsRouters.get('/', (req: Request<{}, {}>, res: Response<GetCartResponse>) => {
    res.status(200).json([
        {
            id: "qwe",
            text:"qqqqqqqqq",
        }
    ])
});


// cardsRouters.get('/:"id', (req: Request<IdParams, {}>, res: Response<Cart>) => {

// });

// cardsRouters.post('/', (req: Request<CreateCartRequest>, res: Response<Cart>) => {

// });