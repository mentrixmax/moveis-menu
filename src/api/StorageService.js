// src/services/StorageService.js
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Salva dados no AsyncStorage
 * @param {string} key - Chave do item a ser salvo
 * @param {any} value - Valor a ser armazenado (será convertido para string)
 */
export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log(`[Storage] Dados salvos em "${key}"`);
  } catch (error) {
    console.error(`[Storage] Erro ao salvar "${key}":`, error);
    throw error; // Pode ser tratado onde a função for chamada
  }
};

/**
 * Recupera dados do AsyncStorage
 * @param {string} key - Chave do item a ser recuperado
 * @returns {Promise<any>} - Dados parseados ou `null` se não existir
 */
export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log(`[Storage] Dados recuperados de "${key}":`, value);
    return value !== null ? JSON.parse(value) : null;
  } catch (error) {
    console.error(`[Storage] Erro ao ler "${key}":`, error);
    throw error;
  }
};

/**
 * Remove um item do AsyncStorage
 * @param {string} key - Chave do item a ser removido
 */
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`[Storage] Dados removidos de "${key}"`);
  } catch (error) {
    console.error(`[Storage] Erro ao remover "${key}":`, error);
    throw error;
  }
};

/**
 * Limpa TODOS os dados do AsyncStorage
 */
export const removeAll = async () => {
  try {
    await AsyncStorage.clear();
    console.log('[Storage] Todos os dados foram removidos');
  } catch (error) {
    console.error('[Storage] Erro ao limpar storage:', error);
    throw error;
  }
};

// Exporta todas as funções em um objeto (opcional)
export default {
  saveData,
  getData,
  removeData,
  removeAll,
};