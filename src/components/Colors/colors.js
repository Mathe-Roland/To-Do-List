export function colorsComponent(status){

        switch (status) {
          case "Finished":
            return "lightgreen";
          case "In Progress":
            return "lightblue";
          case "Todo":
            return "cyan";
          case "Blocked":
            return "red";
          case "On Hold":
            return "orange";
          case "Cancelled":
            return "#BF40BF";
          case "Pending":
            return "yellow";
          default:
            return "bg-white";
        }
      
      

}