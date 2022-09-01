export const isUrlChecking = (str) => {
    try {
        new URL(str)
        return true
    } catch {
        return false
    }
}
