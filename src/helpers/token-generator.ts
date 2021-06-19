export class TokenGenerator{
    public static instance:TokenGenerator =new  TokenGenerator();
    private constructor() {
        
    }

    public generate():string{
        let r = Math.random().toString(36).substring(7);
        return r;
    }

}