
export function sorts(list : Array<any>, columnName: string, orderBy: number, type: string=''){
  return list.sort((a: any, b: any)=> {
    if(type=='ci'){
      return a[columnName].toLowerCase() > b[columnName].toLowerCase() ? -1 * orderBy : 1 * orderBy;
    } else {
      return a[columnName] > b[columnName] ? -1 * orderBy : 1 * orderBy;
    }

  })
}

export function filter(filterConfig: any) {
  
  let rows = filterConfig.data;
  for(let key in filterConfig.filter){
  let  ftype=filterConfig.filter[key];
    rows = rows.filter((e: any) => {
      if (ftype.value == '') {
        return true;
      }
      if(ftype.type=='num'){
        return e[ftype.columnName] == ftype.value;
      } else if(ftype.type=='ci'){
        return e[ftype.columnName].indexOf(ftype.value)>-1;
      } else if(ftype.type=='cs'){
        return e[ftype.columnName].toLowerCase().indexOf(ftype.value.toLowerCase())>-1;
      } else if(ftype.type=='numGte'){
        return e[ftype.columnName] >= ftype.value;
      } else if(ftype.type=='numLte'){
        return e[ftype.columnName] <= ftype.value;
      }
      else {
        return true;
      }

    });
  }
  return rows;
}


export function getGridPaging(filterObject: any, sortObj: any) {
 
  let rows = filter(filterObject);
  rows = sorts(rows, sortObj.columnName, sortObj.orderBy);
  let totalRows = rows.length;
  let totalPages = Math.ceil(rows.length / filterObject.rowsPerPage);
  if (filterObject.currentPage > totalPages) {
    filterObject.currentPage = 1;
  }
  let startIndex = (filterObject.currentPage - 1) * filterObject.rowsPerPage;
  rows = rows.slice(startIndex, startIndex + filterObject.rowsPerPage);
  let pages = [];
  for (let i = 1; i <= totalPages; i = i + 1) {
    pages.push(i);
  }
  filterObject.pages = pages;
  filterObject.rows = rows;
  filterObject.startRow = startIndex + 1
  filterObject.endRow = startIndex + filterObject.rows.length
  filterObject.totalRows = totalRows;
}
