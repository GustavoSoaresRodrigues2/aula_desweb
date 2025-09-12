const Animal = ({tipo, tamanho, espelhamento}) => {
  return (
    <>
      <i className={`
        fa-${tipo} 
        fa-${tamanho}x 
        fa-solid 
        fa-${espelhamento} 
        m-2
        `} />
    </>
  )
}

export default Animal