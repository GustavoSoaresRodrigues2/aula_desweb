const Animal = ({tipo, tamanho, espelhamento, cor}) => {
  return (
    <>
      <i className={`
        fa-${tipo} 
        fa-${tamanho}x 
        fa-solid 
        fa-${espelhamento} 
        m-2
        text-${cor}
        `} />
    </>
  )
}

export default Animal