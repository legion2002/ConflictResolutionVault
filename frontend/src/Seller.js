import { AcceptOrderForm } from "./accept-order/AcceptOrder";
import { ShipmentPatchedForm } from "./shipment-patched/ShipmentPatched";
import { DefendConflictForm1 } from "./defend-conflict-1/DefendConflict";

function Seller(){
    return(
        <div style={{ background: "radial-gradient(#FF9A8B, #FF6A88)" }}>
            <AcceptOrderForm></AcceptOrderForm>

            {/* accept order */}

            <ShipmentPatchedForm></ShipmentPatchedForm>

            {/* shipment patched */}

            <DefendConflictForm1></DefendConflictForm1>
        </div>
    );
}
export default Seller