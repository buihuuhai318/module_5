import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import LoginForm from "./components/LoginForm";
import {Route, Routes} from "react-router-dom";
import Information from "./components/Information";
import HomeAdmin from "./components/HomeAdmin";
import { axiosClient } from "./service/AxiosClient";
import Authentication from "./components/Authentication";
import Error403 from "./components/Error403";
import Error401 from "./components/Error401";
import { EnumAppUserRole } from "./components/EnumAppUserRole";
function App() {
    axiosClient();
    return (
        <>
            <ToastContainer></ToastContainer>
            <Routes>
                <Route path="/401" element={<Error401 />} />
                {/*<Route path="*" element={<Home />}></Route>*/}
                <Route path="/login" element={<LoginForm />} />
                <Route path="/403" element={<Error403 />} />
                <Route
                    element={
                        <Authentication
                            allowedRoles={[
                                EnumAppUserRole.ROLE_ADMIN,
                                EnumAppUserRole.ROLE_SALE,
                                EnumAppUserRole.ROLE_BUSINESS,
                                EnumAppUserRole.ROLE_WAREHOUSE,
                            ]}
                        />
                    }
                >
                    <Route path="/admin/information/:id" element={<Information />}></Route>
                    <Route path="/admin/home" element={<HomeAdmin />}></Route>
                    {/*<Route path="/login" element={<LoginForm />}></Route>*/}
                </Route>
            </Routes>
        </>
    );
}

export default App;
