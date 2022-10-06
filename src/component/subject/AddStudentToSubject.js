export const OperationStudentAndSubject=()=>{
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)
    const [student, setStudent]=useState([])
  
    const getAllStudents = useCallback(async () => {
      try {
        const fetched = await request('http://localhost:8080/api/student/get/all', 'GET', null, {
          Authorization: `Bearer ${token}`
        })
        setStudent(fetched)
      } catch (e) {}
    }, [token, request])
  
    useEffect(() => {
      getAllStudents()
    }, [getAllStudents])
  
    
    if (loading) {
      return <Loader/>
    }
  
      return(
          <>
         {student.map((item)=>{
          return(
          <Student data={item}/>
          )
         })}
        </>)
}