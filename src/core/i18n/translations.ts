export const translations = {
  vi: {
    appName: "Công Cụ Tiện Ích",
    searchPlaceholder: "Tìm kiếm công cụ theo tên, mô tả hoặc từ khóa...",
    backToTools: "Quay lại danh sách",
    utilityTools: "Công Cụ Tiện Ích",
    selectTool: "Chọn một công cụ từ danh sách để bắt đầu.",
    noToolsFound: "Không tìm thấy công cụ nào",
    noToolsDesc: "Chúng tôi không tìm thấy công cụ nào khớp với \"{query}\". Vui lòng thử lại.",
    clearSearch: "Xóa tìm kiếm",
    
    // Dew Point Tool
    dewPointCalculator: "Máy Tính Điểm Sương",
    dewPointDesc: "Tính toán nhiệt độ điểm sương từ độ ẩm tương đối và nhiệt độ không khí sử dụng công thức Magnus.",
    temperature: "Nhiệt độ (°C)",
    relativeHumidity: "Độ ẩm tương đối (%)",
    tempPlaceholder: "vd: 20",
    humidityPlaceholder: "vd: 50",
    invalidTemp: "Nhiệt độ không hợp lệ",
    invalidHumidity: "Độ ẩm không hợp lệ (phải từ 0 đến 100)",
    calculatedDewPoint: "Điểm Sương Tính Toán",
    
    // Condensation Humidity
    condensationMode: "Tính Độ Ẩm Tạo Sương",
    standardMode: "Tính Điểm Sương Chuẩn",
    surfaceTemp: "Nhiệt độ bề mặt (°C)",
    airTemp: "Nhiệt độ không khí (°C)",
    criticalHumidity: "Độ ẩm tới hạn để tạo sương",
    criticalHumidityDesc: "Độ ẩm tương đối tối thiểu để sương bắt đầu hình thành trên bề mặt.",
    invalidSurfaceTemp: "Nhiệt độ bề mặt không hợp lệ",
    invalidAirTemp: "Nhiệt độ không khí không hợp lệ",
    
    // Keywords
    kw_dew: "sương",
    kw_point: "điểm",
    kw_temperature: "nhiệt độ",
    kw_humidity: "độ ẩm",
    kw_weather: "thời tiết",
    kw_magnus: "magnus"
  },
  en: {
    appName: "ToolKit",
    searchPlaceholder: "Search tools by name, description, or keywords...",
    backToTools: "Back to tools",
    utilityTools: "Utility Tools",
    selectTool: "Select a tool from the collection to get started.",
    noToolsFound: "No tools found",
    noToolsDesc: "We couldn't find any tools matching \"{query}\". Try adjusting your search terms.",
    clearSearch: "Clear search",
    
    // Dew Point Tool
    dewPointCalculator: "Dew Point Calculator",
    dewPointDesc: "Calculate the dew point temperature from relative humidity and air temperature using the Magnus formula.",
    temperature: "Temperature (°C)",
    relativeHumidity: "Relative Humidity (%)",
    tempPlaceholder: "e.g., 20",
    humidityPlaceholder: "e.g., 50",
    invalidTemp: "Invalid temperature",
    invalidHumidity: "Invalid humidity (must be between 0 and 100)",
    calculatedDewPoint: "Calculated Dew Point",
    
    // Condensation Humidity
    condensationMode: "Condensation Humidity Mode",
    standardMode: "Standard Dew Point Mode",
    surfaceTemp: "Surface Temperature (°C)",
    airTemp: "Air Temperature (°C)",
    criticalHumidity: "Critical Humidity for Dew",
    criticalHumidityDesc: "The minimum relative humidity required for dew to start forming on the surface.",
    invalidSurfaceTemp: "Invalid surface temperature",
    invalidAirTemp: "Invalid air temperature",
    
    // Keywords
    kw_dew: "dew",
    kw_point: "point",
    kw_temperature: "temperature",
    kw_humidity: "humidity",
    kw_weather: "weather",
    kw_magnus: "magnus"
  }
};

export type Language = 'vi' | 'en';
export type TranslationKey = keyof typeof translations.en;
