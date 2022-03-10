export default function Logout(){
    // localStorage.setItem('username', null);
    localStorage.removeItem('username');
    return<>
    Thanks for using our app
    </>
}