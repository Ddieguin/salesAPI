import { EntityRepository, Repository } from 'typeorm';
import { Product } from '../entities/product';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
    findByName(name: string): Promise<Product | undefined> {
        const product = this.findOne({
            where: {
                name_product: name,
            },
        });

        return product;
    }

    async exists(name: string) {
        const result = await this.findOne({
            where: {
                name_product: name,
            },
        });

        return result ? true : false;
    }
}
