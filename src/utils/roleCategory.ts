export const client: string = "client"
export const admin: string = "admin"

export const getCurrentRoleCategory = (roles) => {
    var currentRole = client;
    var roles = roles.map((c) => c.toLowerCase());
    var isAdmin = false
    for (let index = 0; index < roles.length; index++) {
        const role = roles[index];
        if (role.includes("admin") ||
            role.includes("super") ||
            role.includes("doctor")) {
            isAdmin = true;
            break;
        }
    };
    if (
        isAdmin
    ) {
        currentRole = admin;
    }
    return currentRole;
}