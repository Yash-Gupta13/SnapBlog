import conf from "../conf/conf.js";
//appwrite 
import { Client, Account, ID } from "appwrite";

//make class first of the auth service 

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    //creating the account 

    async createAccount({email , password , name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password , name);

            if(userAccount){
                //if useraccount exist then call anothe method like login 
                return this.login(email,password);


            }else{
                return userAccount;
            }

        } catch (error) {
            throw error;
        }
    }

    //login feature

    async login({email,password}){
        try {
            const userLogin = this.account.createEmailSession(email,password);
            return userLogin;
        } catch (error) {
            throw error;
        }
    }

    //checking whether the user is login or not or existing or not 

    async getCurrentUser(){
        try { 
            return await this.account.get();

        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;

    }

    //logout 

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}



//exporting 
const authService = new AuthService();

export default authService;

