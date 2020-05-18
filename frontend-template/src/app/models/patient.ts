import { ImageModel } from './image-model';

// import {ImageModel} from ''
export class Patient 
{

    constructor(public id: any, public name: string, public gender: string, public disease: string,  public emailId: string, public contactNumber:any, public image:ImageModel)
    {
    
    
    }
}
