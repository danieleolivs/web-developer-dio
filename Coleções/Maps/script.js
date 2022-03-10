function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map()

usuarios.set('Luiz', 'Admin')
usuarios.set('Sthepany', 'Admin')
usuarios.set('jorge', 'User')
usuarios.set('Natalia', 'Admin')

console.log(getAdmins(usuarios))