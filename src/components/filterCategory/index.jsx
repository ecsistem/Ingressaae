function FilterCategory() {
  return (
    <div className="filter">
      <form>
        <h1>Filtar Categoria</h1>
        <div className="Flex">
          <span>teste</span>
          <select name="select">
            <option value="all" selected>
              Todos
            </option>
            <option value="valor2">Valor 2</option>
            <option value="valor3">Valor 3</option>
          </select>
        </div>

        <div className="Flex">
          <span>teste</span>
          <select name="select">
            <option value="all" selected>
              Todos
            </option>
            <option value="valor2">Valor 2</option>
            <option value="valor3">Valor 3</option>
          </select>
        </div>

        <div className="Flex">
          <span>teste</span>
          <select name="select">
            <option value="all" selected>
              Todos
            </option>
            <option value="valor2">Valor 2</option>
            <option value="valor3">Valor 3</option>
          </select>
        </div>
        <button>Filtrar</button>
      </form>
    </div>
  );
}
export default FilterCategory;
