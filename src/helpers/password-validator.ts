export class PasswordValidator{
    public static instance:PasswordValidator =new  PasswordValidator();
    
    private constructor() {
        
    }

    public validate(password:string, originalPassword:string):boolean{
        return password === originalPassword;
    }
}