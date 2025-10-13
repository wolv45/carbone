export default function CustomFormatters(dataFromJson, options) {
  return {
    t: (data) => {
      return options.translations[options.lang][data.toLowerCase()];
    },
  };
}
