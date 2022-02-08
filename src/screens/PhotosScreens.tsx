/*import {launchImageLibrary} from 'react-native-image-picker';

export function PhotoComponent() {
  // Nosso estado de arquivos
  const [file, setFile] = useState();

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
      title: 'Foto de avaliação',
      takePhotoButtonTitle: 'Escolha uma foto',
      chooseFromLibraryButtonTitle: 'Selecione da galeria uma foto',
      selectionLimit: 1, // Se deixar 1, será permitido apenas uma foto e 0 várias
    };

    launchImageLibrary(options, async response => {
      if (response.didCancel) {
        console.log('Usuário cancelou a seleção');
      } else if (response.error) {
        console.log('Ocorreu um erro.');
      } else {
        const photoFile = {
          uri: asset.uri,
          name: asset.fileName,
          type: 'image/jpeg',
        };

        setFile(photoFile);
      }
    });
  };
}
*/