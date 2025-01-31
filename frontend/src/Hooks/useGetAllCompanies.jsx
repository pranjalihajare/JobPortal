import { setCompanies } from '@/redux/companySlice.js'
import { COMPANY_API_END_POINT } from'../components/utils/constant.js'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useGetAllCompanies = () => {   
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const fetchCompanies = async () => {
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/get`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setCompanies(res.data.companies));
                }
            } catch (error) {
                console.log(error);z
            }
        }
        fetchCompanies();
    },[])
}

export default useGetAllCompanies