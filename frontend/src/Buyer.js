import { CreateNewOrderForm } from "./create-new-order/CreateNewOrder";
import { ShipmentReceived } from "./shipment-received/shipmentReceived";
import { LodgeConflictForm } from "./lodge-conflict/LodgeConflict";
import { DefendConflictForm } from "./defend-conflict/DefendConflict";

function Buyer(){
    return(
        <div style={{ background: "radial-gradient(#FF9A8B, #FF6A88)" }}>
        
            <CreateNewOrderForm></CreateNewOrderForm>
            <ShipmentReceived></ShipmentReceived>
            <LodgeConflictForm></LodgeConflictForm>
            <DefendConflictForm></DefendConflictForm> 
        
        </div>
        
    );
}
export default Buyer