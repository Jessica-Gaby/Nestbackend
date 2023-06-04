/* eslint-disable prettier/prettier */
import {PrimaryGeneratedColumn,Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, ManyToOne } from "typeorm";
import { CategoryEntity } from "./category.model";

@Entity ('products', { schema: 'ventas' })

export class ProductEntity {
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

    @ManyToOne(() => CategoryEntity, category => category.products)
  categories: CategoryEntity [];

    /*
    @Column( 'varchar',{
        name:'code',
        nullable:false,
        comment:'Codigo del producto',
       
    })
    codeAT: string;
    */

    @Column( 'varchar',{
        name:'title',
        nullable:false,
        comment:'Nombre del producto',
       
    })
    titleAT: string;
    
    @Column('integer',{
        name: 'price',
        nullable:false,
        comment: 'Precio del producto',
    })
    priceAT:number;
    
    @Column ('varchar',{
        name:'description',
        nullable:true,
        comment: 'Descripcion del producto',
    })
    descriptionAT:string;
    @Column('varchar',{
        name:'images',
        nullable:true,
        comment: 'Imagen del producto',
    })
    imagesAT:string;
    @Column('varchar',{
        name: 'category',
        nullable: false,
        comment:'categoria dl producto'
    })
    categoryAT:string;
     // los decoradores sirven para hacer converciones:De esta manera se reaiza las converiones desde la linea 68 y 75
    /*
    @BeforeInsert()
    @BeforeUpdate()
    async setCode(){
        if(!this.code){
            return;
        }
        this.code = this.setCode.toUpperCase().trim();
    }
    */
    /*@BeforeInsert()
    @BeforeUpdate()
    async setMail(){
        if(!this.mail){
            return;
        }
        this.mail = this.setMail.toLowerCase().trim();
    }*/
    /*@BeforeInsert()
    @BeforeUpdate()
    async setPassword(){
        if(! this.password){
            return;
        }
        this.password = await Bcrypt.hash(this.password, 12);    //await significa esperar
    }*/

}