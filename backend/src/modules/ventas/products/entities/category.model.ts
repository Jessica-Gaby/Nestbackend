/* eslint-disable prettier/prettier */
import {PrimaryGeneratedColumn,Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, OneToMany } from "typeorm";
import { ProductEntity } from "./product.model";

@Entity ('products', { schema: 'ventas' })

export class CategoryEntity {
    @PrimaryGeneratedColumn('uuid')  //uuid es para indicar que el id es el primarykey
        id: string;
    
    @CreateDateColumn({    
        name:'creted_at',
        type:'timestamp',
        default: ()=>'CURRENT_TIMESTAMP',
    })
    createAt:Date;

    @UpdateDateColumn({
        name:'update_at',
        type:'timestamp',
        default: ()=>'CURRENT_TIMESTAMP',
    })
    updateAt:Date;

    @DeleteDateColumn({
        name:'delete_at',
        type:'timestamp',
        nullable: true,
    })
    deleteAt:Date;

    @OneToMany(() => ProductEntity, products => products.categories)
  products: ProductEntity []; //atributo de tipo arreglo

    @Column( 'varchar',{
        name:'name',
        nullable:false,
        comment:'nombre de la categoria',
       
    })
    nameAT: string;

    @Column( 'varchar',{
        name:'description',
        nullable:false,
        comment:'descripcion de la categoria',
       
    })
    descriptionAT: string;
}