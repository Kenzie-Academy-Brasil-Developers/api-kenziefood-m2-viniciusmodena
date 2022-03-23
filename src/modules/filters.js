export class Filter{
    static filterCategory(list,category){
        const filteredList = list.filter((item)=>{
            return item.categoria === category
        })
        
        return filteredList
    }

    static searchBarFilter(list,search){
        const filteredList = list.filter((item)=>{
            const itemName = item.nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return itemName.toLowerCase().includes(search.toLowerCase())
            
        })

        return filteredList
    }
}