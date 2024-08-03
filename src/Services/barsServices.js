import sidenavData from "Assests/Json/Sidebar.json"

function getSidebarData(location, setSidenavItems){
    try{
        if(location.pathname.startsWith("/admin")){//location is the url after the .com
            return setSidenavItems(sidenavData.admin_sidebar)
        }
    }catch (error){
        return console.log(error)
    }
}
export {getSidebarData}