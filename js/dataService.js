/* ============================================
   DATA SERVICE MODULE - API & Database
   ============================================ */

const DATABASE_URL = 'database.json';

const dataService = {
    fetchData: async () => {
        try {
            const response = await fetch(DATABASE_URL);
            if (!response.ok) throw new Error("Network error");
            return await response.json();
        } catch (error) {
            console.error("Failed to fetch database:", error);
            return null;
        }
    }
};
